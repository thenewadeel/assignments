float DEFAULTMINSPEED=0.1;
float DEFAULTMAXSPEED=10;
float DEFAULTTIMERSECONDS=30;
public class Smart_Fan{
    static int lastID=0;
    static int newFanRegistered(){
        return ++(Smart_Fan.lastID);
    }
    int ID;
    float speed,speedMin,speedMax,batteryPercentage;
    int secondsRun,timerSeconds;
    boolean isRunning,wifi_Status;

    public Smart_Fan(){
        this.ID=Smart_Fan.lastID++;
        this.speedMin=DEFAULTMINSPEED;
        this.speedMax=DEFAULTMAXSPEED;
        this.timerSeconds=DEFAULTTIMERSECONDS;
        this.isRunning=false;
        this.wifi_Status=false;
    }
    public final int getNumber(){

    }
}