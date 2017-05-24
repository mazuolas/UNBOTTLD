@drinks.each_with_index do |drink, key|
  json.set! key do
    json.partial! 'api/drinks/drink', drink: drink
  end
end
