import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export let GET = async (req: NextRequest) => {
  let search = new URL(req.url).searchParams;

  let title = search.get('title') || '...';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          background: 'linear-gradient(45deg, #000000, #3e0243)',
          padding: '100px'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            gap: 10
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '35px'
            }}
          >
            <div
              style={{
                width: '3.5vw',
                height: '3.5vw',
                background: 'white',
                transform: 'rotate(45deg)'
              }}
            />

            <p
              style={{
                fontWeight: 800,
                fontSize: '40px',
                lineHeight: 1
              }}
            >
              YC Agent Jam '25
            </p>
          </div>

          <h1
            style={{
              lineHeight: 1,
              fontSize: '90px',
              fontWeight: 800
            }}
          >
            {title}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
};
