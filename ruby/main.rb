command = "zowe jobs submit ds \"#{ARGV[0]}\""
output = system(command)
# printf output
