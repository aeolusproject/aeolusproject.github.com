          //<![CDATA[
            new TWTR.Widget({
              version: 2,
              type: 'profile',
              rpp: 5,
              interval: 30000,
              width: 'auto',
              height: 'auto',
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
                scrollbar: false,
                loop: false,
                live: false,
                behavior: 'all'
              }
            }).render().setUser('aeolusproject').start();
          //]]>
