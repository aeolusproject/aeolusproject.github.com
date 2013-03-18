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
                  background: '#47aaed',
                  color: '#ffffff'
                },
                tweets: {
                  background: '#47aaed',
                  color: '#000000',
                  links: '#f5f5f5'
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
