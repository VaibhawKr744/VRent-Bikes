// pages/api/proxy/bikes.js
export default async function handler(req, res) {
    const { method, query } = req;
  
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://bikerent.ap-south-1.elasticbeanstalk.com/api';
  
    try {
      if (method === 'GET') {
        const queryString = new URLSearchParams(query).toString();
        const url = queryString ? `${API_BASE_URL}/bikes?${queryString}` : `${API_BASE_URL}/bikes`;
  
        const response = await fetch(url, {
          headers: {
            'Content-Type': 'application/json',
            // Add any required headers here
          },
        });
  
        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }
  
        const data = await response.json();
        return res.status(200).json(data);
      }
  
      // Handle other methods if needed
      res.setHeader('Allow', ['GET']);
      return res.status(405).end(`Method ${method} Not Allowed`);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Failed to fetch bikes' });
    }
  }
  