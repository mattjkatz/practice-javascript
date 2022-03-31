# # 1

# array = [2, 4, 5, 7, 12]
# sum = 0
# array.each do |number|
#   sum += number
# end

# p sum

# # 2

# def smallest_string(array)
#   smallest_string = array[0]
#   array.each do |string|
#     if string.split("").length < smallest_string.split("").length
#       smallest_string = string
#     end
#   end
#   return smallest_string
# end

# p smallest_string(["hey", "hello", "hi", "whats up?"])

# # 3

# def reverse_array(array)
#   index = array.length - 1
#   reversed_array = []
#   while index >= 0
#     reversed_array << array[index]
#     index -= 1
#   end
#   return reversed_array
# end

# p reverse_array([2, 4, 6, 3, 8, 9, 11])

# # 4 

# def words_starting_with_a(array)
#   def initial
#     self[0,1]
#   end
#   counter = 0
#   array.each do |word|
#     if word.initial == "a"
#       counter += 1
#     end
#   end
#   return counter
# end

# p words_starting_with_a(["alabama", "arkansas", "boston", "alaska"])

# # 5

# def join_words(array)
#   full_string = ""
#   index = 0
#   while index < array.length
#     if index < array.length - 1
#       full_string = full_string + array[index] + ", "
#     else
#       full_string = full_string + array[index]
#     end
#     index += 1
#   end
#   return full_string
# end

# p join_words(["what", "is", "up", "my", "dude"])

# # 6

# def multiply_array(array)
#   product = 1
#   array.each do |number|
#     product = product * number
#   end
#   return product
# end

# p multiply_array([2, 4, 5, 3, 7])

# 7

def smallest_two_num(array)
  smallest_num = array[0]
  second_smallest_num = array[1]
  array.each do |number|
    if number < smallest_num
      second_smallest_num = smallest_num
      smallest_num = number
    elsif number < second_smallest_num
      second_smallest_num = number
    end
  end
  return "The two smallest numbers are #{smallest_num} and #{second_smallest_num}"
end

p smallest_two_num([4, 5, 7, 3, 8, 2, 6])
