(ns colors-in-cultures.db.query
  (:require [datascript.core :as d]
            [clojure.string :as str]
            [colors-in-cultures.db.core :refer [conn]]))

(defn get-colors []
  (->> (d/q '[:find [(pull ?color-e [:color/name :color/code]) ...]
              :where [?color-e :color/name _]]
            @conn)
       (sort-by :color/name)))

; (get-colors)

(defn get-color-code [color-name]
  (d/q '[:find ?color-code .
         :in $ ?color-name
         :where 
         [?c-entity :color/name ?color-name]
         [?c-entity :color/code ?color-code]]
       @conn
       color-name))

; (get-color-code "blue")

(defn has-color? [relations color]
  (some (fn [rel] (= (-> rel second :color/name) color)) relations))

(defn get-nations []
  (->> (d/q '[:find [(pull ?nation-e [*]) ...]
              :where [?nation-e :nation/name _]]
            @conn)
       (sort-by :nation/name)))

; (get-nations)

(defn get-nation [nation-id]
  (d/q '[:find (pull ?e [*]) .
         :in $ ?nation-id
         :where 
         [?e :nation/id ?nation-id]]
       @conn
       nation-id))

; (get-nation "A")

(defn get-color [color-name]
  (d/q '[:find (pull ?e [*]) .
         :in $ ?color-name
         :where 
         [?e :color/name ?color-name]]
       @conn
       color-name))

; (get-color "blue")

(defn transform-relations [relations]
  (map #(vector (-> (first %) get-nation) 
                (-> (second %) get-color)) 
       relations))

; (transform-relations [["B" "purple"]
;                       ["E" "black"]])

(defn starts-with? [orig-str query]
  (str/starts-with? 
    (str/lower-case orig-str) 
    (str/lower-case query)))

(defn get-emotions [query]
  (->> (d/q '[:find (pull ?e [:emotion/id :emotion/name :emotion/icon]) ?transformed-rel 
          :in $ ?query starts-with? transform-relations
          :where
          [?e :emotion/name ?name]
          [?e :emotion/relations ?rel]
          [(starts-with? ?name ?query)]
          [(transform-relations ?rel) ?transformed-rel]
          ]
        @conn
        query
        starts-with?
        transform-relations)
       (sort-by #(-> % first :emotion/name))))

; (get-emotions "a")

(defn game-seq [n]
  (->> (get-emotions "")
       shuffle
       (take n)
       (map (fn [el] 
              (let [random-rel (->> el second shuffle)
                    nation (ffirst random-rel) 
                    correct-color (->> random-rel first second)]
                {:emotion (first el)
                 :nation nation
                 :correct-color correct-color})))))

; (take 1 (game-seq))
; (game-seq 1)
