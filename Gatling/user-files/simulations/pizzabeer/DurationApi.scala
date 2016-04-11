package pizzabeer

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class DurationApi extends Simulation {

	val httpProtocol = http
		.baseURL("http://localhost:8080")
		.inferHtmlResources(BlackList(""".*\.css""", """.*\.js""", """.*\.ico"""), WhiteList())

	val headers_0 = Map("Upgrade-Insecure-Requests" -> "1")

	val headers_3 = Map(
		"Pragma" -> "no-cache",
		"Upgrade-Insecure-Requests" -> "1")

    val uri1 = "http://localhost:8080/api/durations"
    val uri2 = "http://localhost:8080/api/healthcheck"

	val scn = scenario("DurationApi")
		.exec(http("/api/durations")
			.get("/api/durations")
			.headers(headers_0))
		.pause(3)
		.exec(http("/api/healthcheck")
			.get("/api/healthcheck")
			.headers(headers_0))
		.pause(5)
		.exec(http("/api/durations")
			.get("/api/durations")
			.headers(headers_0))
		.pause(14)
		.exec(http("/api/durations")
			.get("/api/durations")
			.headers(headers_3)
			.resources(http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
			http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),						
			http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3),
			http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3),			
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3),
            http("/api/durations")
			.get(uri1 + "")
			.headers(headers_3),
            http("/api/healthcheck")
			.get(uri2 + "")
			.headers(headers_3)))

	setUp(
		scn.inject(rampUsers(500) over (5 seconds))).protocols(httpProtocol)
}