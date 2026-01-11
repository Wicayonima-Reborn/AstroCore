use axum::{
    routing::{get, post},
    Json, Router,
};
use serde_json::json;
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/api/health", get(health))
        .route("/api/ai/run", post(run_ai));

    println!("backend running on :8080");

    let listener = TcpListener::bind("0.0.0.0:8080")
        .await
        .unwrap();

    axum::serve(listener, app)
        .await
        .unwrap();
}

async fn health() -> Json<serde_json::Value> {
    Json(json!({
        "backend": "ok",
        "ai": "stub",
        "engine": "offline"
    }))
}

async fn run_ai() -> Json<serde_json::Value> {
    Json(json!({
        "output": "stub response",
        "latency_ms": 5
    }))
}