(ns colors-in-cultures.server)

;; define index content
(def home 
"
<!DOCTYPE html>
<html>
  <head>
    <title>Colors In Cultures</title>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">
    <link rel=\"icon\" href=\"https://clojurescript.org/images/cljs-logo-icon-32.png\">
    <link href=\"styles/main.css\" rel=\"stylesheet\" type=\"text/css\">
  </head>
  <body>
    <div id=\"app\"></div>
    <script src=\"/cljs-out/dev-main.js\" type=\"text/javascript\"></script>
  </body>
</html>
"
)

(defn handler [request]
  (if (and (= :get (:request-method request))
           (= "/"  (:uri request)))
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body home}
    {:status 200
     :headers {"Content-Type" "text/html"}
     :body home}))
