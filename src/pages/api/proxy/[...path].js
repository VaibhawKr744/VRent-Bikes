// pages/api/proxy/[...path].js
export default async function handler(req, res) {
    const { method, query, body } = req;
    const { path } = query;
  
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://bikerent.ap-south-1.elasticbeanstalk.com/api';
    const endpoint = Array.isArray(path) ? path.join('/') : path;
    
    try {
      const url = `${API_BASE_URL}/${endpoint}`;
      console.log('API Request:', { method, url, body }); // Debug log
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          // Forward authorization header if present
          ...(req.headers.authorization && {
            'Authorization': req.headers.authorization
          })
        },
        ...(method !== 'GET' && { body: JSON.stringify(body) })
      });
  
      const data = await response.json();
      console.log('API Response:', data); // Debug log
  
      return res.status(response.status).json(data);
  
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ 
        error: 'API request failed',
        details: error.message 
      });
    }
  }