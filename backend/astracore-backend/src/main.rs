use axum::{
    routing::{get, post},
    Json, Router,
};
use serde_json::{json, Value};
use tokio::net::TcpListener;

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/api/health", get(health))
        .route("/api/ai/run", post(run_ai));

    let listener = TcpListener::bind("0.0.0.0:8080").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}

async fn health() -> Json<Value> {
    Json(json!({
        "backend": "ok",
        "ai": "stub",
        "engine": "offline"
    }))
}

async fn run_ai(Json(payload): Json<Value>) -> Json<Value> {
    let input = payload
        .get("input")
        .and_then(|v| v.as_str())
        .unwrap_or("");

    Json(json!({
        "output": format!("Echo from backend: {}", input),
        "latency_ms": 5
    }))
}