public class OddEven{
    public OddEven(int numberVal){
        this.number=numberVal;
    }
    public boolean check1(){
        boolean returnVal=true;
        for(int i=0;i<=this.number;i++){
            returnVal=!returnVal;
        }
        return returnVal;
    }
    public boolean check2(){
        return ((this.number/2)*2==this.number);
    }
    public boolean check3(){
        return (this.number & 1);
    }
    public int number;
}