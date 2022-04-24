# Input: [4, 2, 5, 99, -4];
# Output: [8, 4, 10, 198, -8];

# define a function 
# set new_array = []
# for each number in array
#   new_array shovel in array[index] * 2
# end
# return new_array

def double(array)
  new_array = []
  array.each do |number|
    new_array << number * 2
  end
  return new_array
end

p double([4, 2, 5, 99, -4])
