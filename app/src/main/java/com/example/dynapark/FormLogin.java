package com.example.dynapark;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class FormLogin extends AppCompatActivity {

    private TextView text_tela_cadastro;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_form_login);

        IniciarComponentes();

        text_tela_cadastro.setOnClickListener(v -> {

            Intent intent = new Intent(FormLogin.this, FormCadastro.class);
            startActivity(intent);

        });
    }

    private void IniciarComponentes() {

        text_tela_cadastro = findViewById(R.id.text_tela_cadastro);

    }
}
