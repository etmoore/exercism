class FoodChainSong

  def verse(verse_count)
    verse_count += 1
    song = []
    verse_count.times do
      song << @verses.pop
    end
    song
  end

end
