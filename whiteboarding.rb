# Input: [4, 2, 5, 99, -4];
# Output: [8, 4, 10, 198, -8];

# define a function 
# set new_array = []
# for each number in array
#   new_array shovel in array[index] * 2
# end
# return new_array

# def double(array)
#   new_array = []
#   array.each do |number|
#     new_array << number * 2
#   end
#   return new_array
# end

# p double([4, 2, 5, 99, -4])

# Given a hash, where the keys are strings representing food items, and the values are numbers representing the price of each food, return the amount someone would pay if they'd order one of each food from the entire menu.

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}

# Output: 14

# Explanation: If someone would order one of everything on the menu, they'd pay a total of 14 (the sum of all the hash's values).

# Input: {"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2}
# Output: 14

# def total_price(hash)
#   total sum of prices
#   hash.each do |price|
#     total sum += price
#   end
#   p total sum
# end

# def total_price(hash)
#   total_price = 0
#   hash.each do |price|
#     total_price += price[1]
#   end
#   p total_price
# end

# total_price({"hot dog" => 2, "hamburger" => 3, "steak sandwich" => 5, "fries" => 1, "cole slaw" => 1, "soda" => 2})

def coolio(array)
  index1 = 0
  index2 = array.length - 1
  coolio = false
  (array.length / 2).times do
    if array[index1] + array[index2] == 100
      coolio = true
    else
      coolio = false
      break
    end
    index1 += 1
    index2 -= 1
  end
  p coolio
end

coolio([90, 20, 70, 100, 30, 80, 10])
