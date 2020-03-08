(ns colors-in-cultures.db
  (:require [datascript.core :as d]))

(def schema 
  {:color/name {:db.unique :db.unique/identity}
   :nation/id {:db.unique :db.unique/identity}
   :emotion/id {:db.unique :db.unique/identity}
   })

(def conn (d/create-conn schema))

(def colors 
  [{:color/name "red"
    :color/code "#ea402b"}
   {:color/name "green"
    :color/code "#5ac76c"}
   {:color/name "yellow"
    :color/code "#fae368"}
   {:color/name "purple"
    :color/code "#7b68ab"}
   {:color/name "orange"
    :color/code "#ee841e"}
   {:color/name "pink"
    :color/code "#f091ab"}
   {:color/name "gold"
    :color/code "#f6cb63"}
   {:color/name "blue"
    :color/code "#50ade3"}
   {:color/name "white"
    :color/code "#ffffff"}
   {:color/name "grey"
    :color/code "#b3b3b3"}
   {:color/name "silver"
    :color/code "#999999"}
   {:color/name "black"
    :color/code "#000000"}])


(def nations
  [{:nation/id   "A"
    :nation/name "Western / American"}
   {:nation/id   "B"
    :nation/name "Japanese"}
   {:nation/id   "C"
    :nation/name "Hindu"}
   {:nation/id   "D"
    :nation/name "Native American"}
   {:nation/id   "E"
    :nation/name "Chinese"}
   {:nation/id   "F"
    :nation/name "Asian"}
   {:nation/id   "G"
    :nation/name "Easern European"}
   {:nation/id   "H"
    :nation/name "Arab"}
   {:nation/id   "I"
    :nation/name "African"}
   {:nation/id   "J"
    :nation/name "South American"}])

(def emotions
  [
   {:emotion/id   "1"
    :emotion/name "Anger"
    :emotion/relations [[{:nation/id "A"} {:color/name "red"}] 
                        [{:nation/id "B"} {:color/name "red"}]
                        [{:nation/id "C"} {:color/name "black"}]
                        [{:nation/id "G"} {:color/name "red"}]
                        [{:nation/id "I"} {:color/name "red"}]]}
   {:emotion/id   "2"
    :emotion/name "Art / Creativity"
    :emotion/relations [[{:nation/id "C"} {:color/name "blue"}]]}
   {:emotion/id   "3"
    :emotion/name "Authority"
    :emotion/relations [[{:nation/id "A"} {:color/name "black"}]]}
   ])


(d/transact! conn colors)
(d/transact! conn nations)
(d/transact! conn emotions)

(defn get-colors []
  (->> (d/q '[:find [(pull ?color-e [:color/name :color/code]) ...]
          :where [?color-e :color/name _]]
        @conn)
       (sort-by :color/name)))

(get-colors)

(defn has-color? [relations color]
  (some (fn [rel] (= (-> rel second :color/name) color)) relations))

(defn get-nation [nation-id]
  (d/q '[:find [?nation-name ...]
         :in $ ?nation-id
         :where 
         [?n-entity :nation/id ?nation-id]
         [?n-entity :nation/name ?nation-name]]
       @conn
       nation-id))

(get-nation "A")

(defn get-nations [relations color]
  (keep (fn [rel] 
          (if (= (-> rel second :color/name) color) 
            (-> rel first :nation/id get-nation))) 
        relations))


(defn get-emotions-by-color [color]
  (->> (d/q '[:find ?name ?nations 
              :in $ ?color ?has-color get-nations
              :where 
              [?entity :emotion/name ?name]
              [?entity :emotion/relations ?rel]
              [(?has-color ?rel ?color) _]
              [(get-nations ?rel ?color) ?nations]]
            @conn
            color
            has-color?
            get-nations)
       (map #(vector (first %) 
                     (flatten (second %))))))


(get-emotions-by-color "red")

; (defn get-nations-list [nation-ids]
;   (d/q '[:find [?nation-name ...]
;          :in $ [?nation-id ...]
;          :where 
;          [?n-entity :nation/id ?nation-id]
;          [?n-entity :nation/name ?nation-name]]
;        @conn
;        nation-ids))

; (get-nations-list ["A" "B"])

; (->> (get-emotions-by-color "black")
;     (map #(vector (first %) 
;                   (get-nations-list (second %)))))
