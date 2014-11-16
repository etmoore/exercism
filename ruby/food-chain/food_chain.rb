class FoodChainSong

  verses = [
              ["I know an old lady who swallowed a fly.",
              "I don't know why she swallowed the fly. Perhaps she'll die."]
            ]

  def verse(verse_count)
    verse_count += 1
    song = []
    verse_count.times do
      song << @verses.pop
    end
    song
  end

end
