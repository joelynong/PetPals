package org.generation.PetPals.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class MvcConfig implements WebMvcConfigurer{

    //To configure Spring MVC and set up view controllers to expose these templates and static folders
    // HTML, CSS/Images/JS folders
    public void addViewControllers(ViewControllerRegistry registry) {
        //Map the browser's URL to a specific View (HTML) inside resources/templates directory
        //Using Thymeleaf to map
        registry.addViewController("/").setViewName("home");
        registry.addViewController("/home").setViewName("home");
        registry.addViewController("/about").setViewName("about");
        registry.addViewController("/profile").setViewName("profile");
        registry.addViewController("/form").setViewName("form");
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static")   //release all content in static folder
                .addResourceLocations("classpath:/static/")
                .setCachePeriod(0);  //prevent from caching
    }
}
