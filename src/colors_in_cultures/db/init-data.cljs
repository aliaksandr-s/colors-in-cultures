(ns colors-in-cultures.db.init-data)

; (def schema 
;   {:color/name {:db.unique :db.unique/identity}
;    :nation/id {:db.unique :db.unique/identity}
;    :emotion/id {:db.unique :db.unique/identity}
;    })

(def schema 
  {:color/name        {:db/unique :db.unique/identity}

   :nation/id         {:db/unique :db.unique/identity}

   :emotion/id        {:db/unique :db.unique/identity}
   ; :emotion/relations {:db/cardinality :db.cardinality/many}
   })

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
    :emotion/relations [["A" "red"] 
                        ["B" "red"]
                        ["C" "black"]
                        ["G" "red"]
                        ["I" "red"]]}
   {:emotion/id   "2"
    :emotion/name "Creativity"
    :emotion/icon "svg/002-courage.svg" 
    :emotion/relations [["C" "blue"]]}
   {:emotion/id   "3"
    :emotion/name "Authority"
    :emotion/icon "svg/003-confusion.svg" 
    :emotion/relations [["A" "black"]]}
   {:emotion/id   "4"
    :emotion/name "Bad Luck"
    :emotion/icon "svg/004-amazed.svg" 
    :emotion/relations [["B" "black"]]}
   {:emotion/id   "5"
    :emotion/name "Balance"
    :emotion/icon "svg/005-surprise.svg" 
    :emotion/relations [["B" "orange"]
                        ["D" "black"]
                        ["F" "green"]]}
   {:emotion/id   "6"
    :emotion/name "Beauty"
    :emotion/icon "svg/005-surprise.svg" 
    :emotion/relations [["A" "purple"]]}
   ; {:emotion/id   "7"
   ;  :emotion/name "Calm"
   ;  :emotion/icon "svg/006-excited.svg" 
   ;  :emotion/relations []}
   {:emotion/id   "8"
    :emotion/name "Celebration"
    :emotion/icon "svg/008-stress.svg" 
    :emotion/relations [["B" "purple"]
                        ["E" "black"]]}
   {:emotion/id   "9"
    :emotion/name "Children"
    :emotion/icon "svg/009-anxious.svg" 
    :emotion/relations [["A" "pink"]
                        ["B" "pink"]
                        ["F" "white"]]}
   {:emotion/id   "10"
    :emotion/name "Cold"
    :emotion/icon "svg/010-nervous.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "blue"]
                        ["D" "blue"]]}
   {:emotion/id   "11"
    :emotion/name "Compassion"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "12"
    :emotion/name "Courage"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "13"
    :emotion/name "Cowardice"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "14"
    :emotion/name "Cruelty"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "15"
    :emotion/name "Danger"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "16"
    :emotion/name "Death"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "17"
    :emotion/name "Decadence"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "18"
    :emotion/name "Deceit"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "19"
    :emotion/name "Desire"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   {:emotion/id   "20"
    :emotion/name "Earthy"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations []}
   ])

(def init-data [colors nations emotions])
