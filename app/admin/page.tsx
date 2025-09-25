"use client";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export default function AdminPage() {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [adminKey, setAdminKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');

  const sendUpdate = async () => {
    if (!subject || !message || !adminKey) {
      setResult('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, message, adminKey })
      });

      const data = await response.json();
      
      if (data.success) {
        setResult(`✅ Update sent to ${data.sentTo} subscribers!`);
        setSubject('');
        setMessage('');
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`❌ Failed to send: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-cream font-vt323 px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl text-mint mb-8 text-center">MEMORI ADMIN</h1>
        
        <Card className="p-6 bg-dark border-mint">
          <h2 className="text-2xl text-mint mb-6">Send Waitlist Update</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-lg mb-2">Admin Key:</label>
              <Input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="bg-dark border-gray text-cream"
                placeholder="Enter admin key"
              />
            </div>
            
            <div>
              <label className="block text-lg mb-2">Subject:</label>
              <Input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="bg-dark border-gray text-cream"
                placeholder="Update subject line"
              />
            </div>
            
            <div>
              <label className="block text-lg mb-2">Message:</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-32 p-3 bg-dark border border-gray text-cream rounded font-vt323"
                placeholder="Write your update message here..."
              />
            </div>
            
            <Button
              onClick={sendUpdate}
              disabled={isLoading}
              className="w-full bg-mint text-dark hover:bg-mint/80 font-vt323 text-lg"
            >
              {isLoading ? 'SENDING...' : 'SEND UPDATE'}
            </Button>
          </div>
          
          {result && (
            <div className="mt-6 p-4 border border-gray rounded">
              <pre className="text-sm">{result}</pre>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}