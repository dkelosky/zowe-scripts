import os;
import sys;

command = 'zowe jobs submit ds "' + sys.argv[1] + '"'

os.system(command)
