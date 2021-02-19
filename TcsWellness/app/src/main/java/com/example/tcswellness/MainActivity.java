package com.example.tcswellness;
import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.os.SystemClock;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.firestore.DocumentReference;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import java.util.HashMap;

public class MainActivity extends AppCompatActivity {

    Button btn ;
    FirebaseFirestore db = FirebaseFirestore.getInstance();
    TextView bp,respiration,bodytem,electro,glucose,heartrate,oxygen,respiraton;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        btn = findViewById(R.id.refresh);
        bp = findViewById(R.id.bp);
        respiration=findViewById(R.id.respiraton);
        bodytem=findViewById(R.id.bodytem);
        electro=findViewById(R.id.electro);
        glucose=findViewById(R.id.glucose);
        heartrate=findViewById(R.id.heartrate);
        oxygen=findViewById(R.id.oxygen);

        getData();

        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                getData();
            }
        });

    }


    void getData(){

        DocumentReference docRef=db.collection("users").document("1");
        docRef.get().addOnCompleteListener(new OnCompleteListener<DocumentSnapshot>() {
            @Override
            public void onComplete(@NonNull Task<DocumentSnapshot> task) {
                if(task.isComplete()) {
                    try{
                        DocumentSnapshot data=task.getResult();
                        HashMap<String,String> da= (HashMap)data.getData();

                        Toast.makeText(MainActivity.this, "Refreshed", Toast.LENGTH_SHORT).show();
                        SystemClock.sleep(50);
                        bp.setText(da.get("Blood Pressure").toString());
                        respiration.setText(da.get("Respiration").toString());
                        glucose.setText(da.get("Glucose").toString());
                        electro.setText(da.get("Electro Cardiogram").toString());
                        bodytem.setText(da.get("Body Temparature").toString());
                        heartrate.setText(da.get("Heart Rate").toString());
                        oxygen.setText(da.get("Oxgen Saturation").toString());
                    }catch (Exception e){
                    }

                }
            }
        });

    }

}

//







