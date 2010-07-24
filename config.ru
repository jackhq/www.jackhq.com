require 'mercury'
log = File.new('tmp/mercury.log', 'a+')
$stdout.reopen(log)
$stderr.reopen(log)
run Mercury