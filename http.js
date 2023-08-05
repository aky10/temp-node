const http=require('http')

const server=http.createServer((req,res) => {

   if(req.url==='/'){
      res.end('Welcome to home page')
   }

   if(req.url==='/about'){
      res.end('Here is our short history');
   }

   res.end(
      `<h1>Oops!</h1>
      <p>We can't find page </p>
      <a href="/"> back home</a>`
   )
})

server.listen(5000);