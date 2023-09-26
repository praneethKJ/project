const enableCORS = function (app) {
    app.all("/", function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, token, Content-Length, X-Requested-With, *');
      next();
    });
  };
  
  export default enableCORS;
  