# HTTP

HTTP is the connectivity we generate between our terminal with node and the HTTP server.

Our require will be linked to (router) and the listen will be listening on the host (in this case 3000). The parameters will be **req** and **res**. The first one will request a URL (whatever it may be), in our case we will be listening on the host (3000) as we indicated above, but it could be an API, or any parameter we pass (URL). In the switch we mention: if our URL has a **/hello**, then write the message **Hello, how are you?**
- res.write('Hello, how are you?')
- res.end() //ara finalizar
como default pasaremos un error (con la misma lógica anterior)