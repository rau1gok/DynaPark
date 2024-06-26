package com.example.dynapark;

import android.os.Bundle;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import android.os.Handler;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import java.util.Locale;

public class TelaPrincipal extends AppCompatActivity {

    private Button btnEntrada;
    private Button btnSaida;
    private Button btnExibirQRCode;
    private TextView tvTempoUso;
    private TextView tvValorPagar;

    private Handler handler = new Handler();
    private long startTimeMillis;
    private boolean estacionamentoAtivo = false;
    private Runnable runnable;

    private static final double VALOR_POR_MINUTO = 5.0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_tela_principal);


    }
}