import { ImageResponse } from 'next/og';
import { PROJECT_TITLE, PROJECT_DESCRIPTION, PROJECT_CREATOR } from '../constants';

export const runtime = 'edge';
export const alt = PROJECT_TITLE;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f0f23',
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px',
            maxWidth: '630px',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            style={{
              fontSize: '56px',
              fontWeight: '800',
              color: '#1a1a2e',
              marginBottom: '24px',
              lineHeight: '1.1',
            }}
          >
            {PROJECT_TITLE}
          </div>
          
          <div
            style={{
              fontSize: '28px',
              color: '#4a5568',
              marginBottom: '32px',
              lineHeight: '1.4',
              maxWidth: '480px',
            }}
          >
            {PROJECT_DESCRIPTION}
          </div>
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '24px',
              color: '#667eea',
              fontWeight: '600',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#667eea',
                borderRadius: '50%',
                marginRight: '12px',
              }}
            />
            Created by {PROJECT_CREATOR}
          </div>
        </div>
        
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '500',
          }}
        >
          Farcaster Mini App
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}