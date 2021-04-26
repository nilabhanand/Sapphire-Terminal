import quickfix

if len(sys.argv) < 2: return
fileName = sys.argv[1]

try:
        settings = quickfix.SessionSettings(fileName)
        application = quickfix.MyApplication()
        storeFactory = quickfix.FileStoreFactory(settings)
        logFactory = quickfix.FileLogFactory(settings)
        initiator = quickfix.SocketInitiator(application, storeFactory, settings, logFactory)
        initiator.start()
        application.run()
        initiator.stop()
        # while condition == true: do something
        
except quickfix.ConfigError, e:
        print e