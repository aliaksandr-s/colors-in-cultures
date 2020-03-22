(ns colors-in-cultures.db
  (:require [datascript.core :as d]))

(def schema 
  {:color/name {:db.unique :db.unique/identity}
   :nation/id {:db.unique :db.unique/identity}
   :emotion/id {:db.unique :db.unique/identity}
   })

(defonce conn (d/create-conn schema))

(def app-state (atom {:selected-color "black"}))

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
    :color/code "#9cafbb"}
   {:color/name "black"
    :color/code "#000000"}])


(def nations
  [{:nation/id   "A"
    :nation/icon "svg/002-courage.svg"
    :nation/name "West. American"}
   {:nation/id   "B"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Japanese"}
   {:nation/id   "C"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Hindu"}
   {:nation/id   "D"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Native American"}
   {:nation/id   "E"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Chinese"}
   {:nation/id   "F"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Asian"}
   {:nation/id   "G"
    :nation/icon "svg/002-courage.svg"
    :nation/name "East. European"}
   {:nation/id   "H"
    :nation/icon "svg/002-courage.svg"
    :nation/name "Arab"}
   {:nation/id   "I"
    :nation/icon "svg/002-courage.svg"
    :nation/name "African"}
   {:nation/id   "J"
    :nation/icon "svg/002-courage.svg"
    :nation/name "South American"}])

(def emotions
  [
   {:emotion/id   "1"
    :emotion/name "Anger"
    :emotion/icon "svg/001-superhero.svg" 
    :emotion/relations [[{:nation/id "A"} {:color/name "red"}] 
                        [{:nation/id "B"} {:color/name "red"}]
                        [{:nation/id "C"} {:color/name "black"}]
                        [{:nation/id "G"} {:color/name "red"}]
                        [{:nation/id "I"} {:color/name "red"}]]}
   {:emotion/id   "2"
    :emotion/name "Creativity"
    :emotion/icon "svg/002-courage.svg" 
    :emotion/relations [[{:nation/id "C"} {:color/name "blue"}]]}
   {:emotion/id   "3"
    :emotion/name "Authority"
    :emotion/icon "svg/003-confusion.svg" 
    :emotion/relations [[{:nation/id "A"} {:color/name "black"}]]}
   {:emotion/id   "4"
    :emotion/name "Bad Luck"
    :emotion/icon "svg/004-amazed.svg" 
    :emotion/relations [[{:nation/id "B"} {:color/name "black"}]]}
   {:emotion/id   "5"
    :emotion/name "Balance"
    :emotion/icon "svg/005-surprise.svg" 
    :emotion/relations [[{:nation/id "B"} {:color/name "orange"}]
                        [{:nation/id "D"} {:color/name "black"}]
                        [{:nation/id "F"} {:color/name "green"}]]}
   {:emotion/id   "6"
    :emotion/name "Beauty"
    :emotion/icon "svg/005-surprise.svg" 
    :emotion/relations [[{:nation/id "A"} {:color/name "purple"}]]}
   {:emotion/id   "7"
    :emotion/name "Calm"
    :emotion/icon "svg/006-excited.svg" 
    :emotion/relations []}
   {:emotion/id   "8"
    :emotion/name "Celebration"
    :emotion/icon "svg/008-stress.svg" 
    :emotion/relations [[{:nation/id "B"} {:color/name "purple"}]
                        [{:nation/id "E"} {:color/name "black"}]]}
   {:emotion/id   "9"
    :emotion/name "Children"
    :emotion/icon "svg/009-anxious.svg" 
    :emotion/relations [[{:nation/id "A"} {:color/name "pink"}]
                        [{:nation/id "B"} {:color/name "pink"}]
                        [{:nation/id "F"} {:color/name "white"}]]}
   {:emotion/id   "10"
    :emotion/name "Cold"
    :emotion/icon "svg/010-nervous.svg" 
    :emotion/relations [[{:nation/id "A"} {:color/name "blue"}]
                        [{:nation/id "B"} {:color/name "blue"}]
                        [{:nation/id "D"} {:color/name "blue"}]]}
   ])

(def init-data [colors nations emotions])

(defn load-db! [conn data]
  (d/reset-conn! conn (d/empty-db schema))
  (doseq [d data]
    (d/transact! conn d)))


(load-db! conn init-data)

(defn get-colors []
  (->> (d/q '[:find [(pull ?color-e [:color/name :color/code]) ...]
              :where [?color-e :color/name _]]
            @conn)
       (sort-by :color/name)))

(get-colors)

(defn get-color-code [color-name]
  (d/q '[:find ?color-code .
         :in $ ?color-name
         :where 
         [?c-entity :color/name ?color-name]
         [?c-entity :color/code ?color-code]]
       @conn
       color-name))

(get-color-code "blue")

(defn has-color? [relations color]
  (some (fn [rel] (= (-> rel second :color/name) color)) relations))

(defn get-nation [nation-id]
  (d/q '[:find (pull ?n-entity [:nation/name :nation/icon]) 
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
  (->> (d/q '[:find (pull ?entity [:emotion/name :emotion/id :emotion/icon]) ?nations 
              :in $ ?color ?has-color get-nations
              :where 
              [?entity :emotion/name ?name]
              [?entity :emotion/id ?id]
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
