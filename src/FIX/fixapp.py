import quickfix as fix
class Application(_object):

        #creates a new session
        def onCreate(self, sessionID): return

        #notifies when a valid logon has been established with a counter party
        def onLogon(self, sessionID):
            self.sessionID = sessionID
            print("Successful Logon to session '%s'." % sessionID.toString())
            return

        #notifies you when an FIX session is no longer online
        def onLogout(self, sessionID): return

        #provides you with a peek at the administrative messages that are being sent from your FIX engine to the counter party
        def toAdmin(self, message, sessionID): return

        #is a callback for application messages that are being sent to a counterparty
        def toApp(self, message, sessionID): return

        #notifies you when an administrative message is sent from a counterparty to your FIX engine
        def fromAdmin(self, message, sessionID): return

        #receives application level request
        def fromApp(self, message, sessionID): return

        #
        def sendToTarget(message, senderCompID, targetCompID, qualifier): return