package com.webnet.createrbuttons;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;

import android.os.Bundle;

import android.view.Window;

import android.view.WindowManager;

import android.webkit.WebResourceError;

import android.webkit.WebResourceRequest;

import android.webkit.WebView;

import android.webkit.WebViewClient;

import android.widget.Toast;

import android.annotation.TargetApi;

public class MainActivity extends AppCompatActivity {

    WebView webView;

    @Override

    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

// задать fullscreen

        this.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);

// задать No Title

        getSupportActionBar().hide();

        webView = new WebView(this);

        webView.getSettings().setJavaScriptEnabled(true);

        final Activity activity = this;

        webView.setWebViewClient(new WebViewClient() {

            @SuppressWarnings("deprecation")

            @Override

            public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {

                Toast.makeText(activity, description, Toast.LENGTH_SHORT).show();

            }

            @TargetApi(android.os.Build.VERSION_CODES.M)

            @Override

            public void onReceivedError(WebView view, WebResourceRequest req, WebResourceError rerr) {

// Redirect to deprecated method, so you can use it in all SDK versions

                onReceivedError(view, rerr.getErrorCode(), rerr.getDescription().toString(), req.getUrl().toString());

            }

        });

        webView.loadUrl("https://buttons.webnet.kz");

        setContentView(webView);

    }

}