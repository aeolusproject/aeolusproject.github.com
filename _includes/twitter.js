          //<![CDATA[
            new TWTR.Widget({
              version: 2,
              type: 'profile',
              rpp: 6,
              interval: 30000,
              width: 'auto',
              height: '200px',
              theme: {
                shell: {
                  background: '#d9e9f1',
                  color: '#666666'
                },
                tweets: {
                  background: '#f3f8fb',
                  color: '#808080',
                  links: '#0a93fc'
                }
              },
              features: {
                scrollbar: true,
                loop: true,
                live: false,
                behavior: 'all'
              }
            }).render().setUser('aeolusproject').start();
          //]]>
