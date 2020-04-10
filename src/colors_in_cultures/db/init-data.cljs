(ns colors-in-cultures.db.init-data)

(def schema 
  {:color/name {:db/unique :db.unique/identity}
   :nation/id  {:db/unique :db.unique/identity}
   :emotion/id {:db/unique :db.unique/identity}
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
    :color/code "#000000"}
   {:color/name "brown"
    :color/code "#A9713C"}])

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
    :emotion/relations [["C" "green"]]}
   {:emotion/id   "12"
    :emotion/name "Courage"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "yellow"]
                        ["C" "orange"]
                        ["G" "red"]]}
   {:emotion/id   "13"
    :emotion/name "Cowardice"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "yellow"]]}
   {:emotion/id   "14"
    :emotion/name "Cruelty"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "purple"]]}
   {:emotion/id   "15"
    :emotion/name "Danger"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["D" "yellow"]]}
   {:emotion/id   "16"
    :emotion/name "Death"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "black"]
                        ["C" "white"]
                        ["D" "black"]
                        ["E" "white"]
                        ["H" "silver"]
                        ["J" "green"]]}
   {:emotion/id   "17"
    :emotion/name "Decadence"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "purple"]]}
   {:emotion/id   "18"
    :emotion/name "Deceit"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["B" "yellow"]]}
   {:emotion/id   "19"
    :emotion/name "Desire"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["C" "orange"]]}
   {:emotion/id   "20"
    :emotion/name "Earthy"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "brown"]
                        ["E" "brown"]]}
   {:emotion/id   "21"
    :emotion/name "Energy"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "orange"]
                        ["C" "red"]]}
   {:emotion/id   "22"
    :emotion/name "Erotic"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "pink"]
                        ["C" "red"]]}
   {:emotion/id   "23"
    :emotion/name "Eternity"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "green"]
                        ["F" "green"]]}
   {:emotion/id   "24"
    :emotion/name "Evil"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "black"]
                        ["C" "black"]
                        ["F" "black"]]}
   {:emotion/id   "25"
    :emotion/name "Excitement"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]]}
   {:emotion/id   "26"
    :emotion/name "Family"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["E" "orange"]
                        ["F" "green"]]}
   {:emotion/id   "27"
    :emotion/name "Femininity"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "pink"]]}
   {:emotion/id   "28"
    :emotion/name "Fertility"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["E" "red"]]}
   {:emotion/id   "29"
    :emotion/name "Flamboyance"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "orange"]
                        ["F" "purple"]]}
   {:emotion/id   "30"
    :emotion/name "Freedom"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "blue"]]}
   {:emotion/id   "31"
    :emotion/name "Friendly"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "orange"]
                        ["D" "grey"]]}
   {:emotion/id   "32"
    :emotion/name "Fun"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "yellow"]
                        ["C" "yellow"]]}
   {:emotion/id   "33"
    :emotion/name "God"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["B" "purple"]
                        ["C" "yellow"]
                        ["H" "green"]]}
   {:emotion/id   "34"
    :emotion/name "Gods"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["C" "blue"]]}
   {:emotion/id   "35"
    :emotion/name "Good Luck"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "green"]
                        ["B" "green"]
                        ["E" "red"]
                        ["G" "red"]
                        ["H" "green"]
                        ["I" "red"]]}
   {:emotion/id   "36"
    :emotion/name "Gratitude"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["D" "purple"]]}
   {:emotion/id   "37"
    :emotion/name "Growth"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "green"]
                        ["E" "green"]]}
   {:emotion/id   "38"
    :emotion/name "Happiness"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "yellow"]
                        ["C" "green"]
                        ["D" "white"]
                        ["E" "red"]
                        ["F" "red"]]}
   {:emotion/id   "39"
    :emotion/name "Healing"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "blue"]
                        ["D" "orange"]]}
   {:emotion/id   "40"
    :emotion/name "Healthy"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["B" "pink"]
                        ["E" "yellow"]]}
   {:emotion/id   "41"
    :emotion/name "Heat"
    :emotion/icon "svg/011-shy.svg" 
    :emotion/relations [["A" "red"]
                        ["C" "red"]
                        ["G" "red"]
                        ["H" "red"]]}
   ])

(def init-data [colors nations emotions])
