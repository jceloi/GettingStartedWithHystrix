package com.vsct.pizzbeer.configuration;


import com.netflix.hystrix.contrib.javanica.aop.aspectj.HystrixCommandAspect;
import com.netflix.hystrix.contrib.metrics.eventstream.HystrixMetricsStreamServlet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnClass;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.embedded.ServletRegistrationBean;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Autoconfiguration for Hystrix
 * @author Lieven Doclo
 */
@Configuration
@EnableConfigurationProperties(HystrixProperties.class)
@ConditionalOnProperty(name="hystrix.enabled", matchIfMissing = true)
class HystrixConfiguration {

    @Autowired
    HystrixProperties hystrixProperties;

    @Bean
    @ConditionalOnClass(HystrixCommandAspect.class)
    HystrixCommandAspect hystrixCommandAspect() {
        return new HystrixCommandAspect();
    }

    @Bean
    @ConditionalOnProperty(name="hystrix.streamEnabled")
    @ConditionalOnClass(HystrixMetricsStreamServlet.class)
    public ServletRegistrationBean hystrixStreamServlet(){
        return new ServletRegistrationBean(new HystrixMetricsStreamServlet(), hystrixProperties.getStreamUrl());
    }
}

/**
 * Configuration properties for Hystrix.
 *
 * @author Lieven Doclo
 */
@ConfigurationProperties(prefix = "hystrix", ignoreUnknownFields = true)
class HystrixProperties {
    private boolean enabled = true;
    private boolean streamEnabled = true;
    private String streamUrl = "/hystrix.stream";

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isStreamEnabled() {
        return streamEnabled;
    }

    public void setStreamEnabled(boolean streamEnabled) {
        this.streamEnabled = streamEnabled;
    }

    public String getStreamUrl() {
        return streamUrl;
    }

    public void setStreamUrl(String streamUrl) {
        this.streamUrl = streamUrl;
    }
}
