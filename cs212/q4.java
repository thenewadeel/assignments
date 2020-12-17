public class Home{
    public Home(int sz, String addr){
        this.size=sz;
        this.address=addr;
    }
    public final String getAddress(){
        return address;
    }

    private int size;
    private String address;
}
public class Apartment extends Home{
    public Apartment(int sz, String addr){
        super(sz,addr)
    }
    public final double estimateUtilities(){
        int size=super.size;
        return size*size/Math.exp(size/3)-size/10;
    }
}
public class House extends Home{
    public House(int sz, String addr, int t){
        super(sz,addr)
        this.taxes=t;
    }
    public final int getTaxes(){
        return taxes;
    }
    public final double estimateUtilities(){
        int size=super.size;
        return size * size / Math.exp(size/3);
    }
    private double taxes;
}