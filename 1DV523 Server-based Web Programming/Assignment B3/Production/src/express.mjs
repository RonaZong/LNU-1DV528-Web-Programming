import express from "express";
import logger from "morgan";
import wsServer from "./websocket.mjs";

const app = express();

app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/webhook", (req, res) => {
  const token = req.headers["x-gitlab-token"];
  if (token !== process.env.WEBHOOK_SECRET) {
    return res.status(403).send("Unauthorized");
  }
  // Process the webhook payload...
  const event = req.body;
  if (event.object_kind === "issue") {
    io.emit("issue_update", event);
  } else if (event.object_kind === "note") {
    io.emit("note_update", event);
  } else if (event.object_kind === "merge_request") {
    io.emit("merge_request_update", event);
  } else if (event.object_kind === "pipeline") {
    io.emit("pipeline_update", event);
  } else if (event.object_kind === "job") {
    io.emit("job_update", event);
  } else if (event.object_kind === "push") {
    io.emit("push_update", event);
  } else if (event.object_kind === "tag_push") {
    io.emit("tag_push_update", event);
  } else if (event.object_kind === "wiki_page") {
    io.emit("wiki_page_update", event);
  } else if (event.object_kind === "deployment") {
    io.emit("deployment_update", event);
  } else if (event.object_kind === "release") {
    io.emit("release_update", event);
  } else if (event.object_kind === "feature_flag") {
    io.emit("feature_flag_update", event);
  } else if (event.object_kind === "security_scan") {
    io.emit("security_scan_update", event);
  } else if (event.object_kind === "vulnerability") {
    io.emit("vulnerability_update", event);
  } else if (event.object_kind === "incident") {
    io.emit("incident_update", event);
  } else if (event.object_kind === "alert") {
    io.emit("alert_update", event);
  } else if (event.object_kind === "incident_management") {
    io.emit("incident_management_update", event);
  } else if (event.object_kind === "alert_management") {
    io.emit("alert_management_update", event);
  } else if (event.object_kind === "code_quality") {
    io.emit("code_quality_update", event);
  } else if (event.object_kind === "code_security") {
    io.emit("code_security_update", event);
  } else if (event.object_kind === "code_review") {
    io.emit("code_review_update", event);
  } else if (event.object_kind === "code_analysis") {
    io.emit("code_analysis_update", event);
  } else if (event.object_kind === "code_metrics") {
    io.emit("code_metrics_update", event);
  } else if (event.object_kind === "code_coverage") {
    io.emit("code_coverage_update", event);
  } else if (event.object_kind === "code_smell") {
    io.emit("code_smell_update", event);
  } else if (event.object_kind === "code_style") {
    io.emit("code_style_update", event);
  } else if (event.object_kind === "code_convention") {
    io.emit("code_convention_update", event);
  } else if (event.object_kind === "code_refactoring") {
    io.emit("code_refactoring_update", event);
  } else if (event.object_kind === "code_review_request") {
    io.emit("code_review_request_update", event);
  } else if (event.object_kind === "code_review_comment") {
    io.emit("code_review_comment_update", event);
  } else if (event.object_kind === "code_review_approval") {
    io.emit("code_review_approval_update", event);
  } else if (event.object_kind === "code_review_rejection") {
    io.emit("code_review_rejection_update", event);
  } else if (event.object_kind === "code_review_discussion") {
    io.emit("code_review_discussion_update", event);
  } else if (event.object_kind === "code_review_resolution") {
    io.emit("code_review_resolution_update", event);
  }
  res.send("OK");
});
