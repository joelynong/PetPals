package org.generation.PetPals.repository.entity;

import org.generation.PetPals.controller.dto.*;

import javax.persistence.*;

//Repository is the Model layer
//JPA (Java Persistence API) map Java Objects (Class) to the database tables
//This concept is known as ORM (Object Relational Mapping)
//Item is an entity that will be use to map with the Item table in the database
//E.g. if you have a Category table, then you will need to create another entity
// (Category) Class

@Entity
public class post {

    //Table Columns are the attributes of the class
    //Database is responsible to auto generate the primary key
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer index;
    private String name;
    private String topic;
    private String avatar;
    private String text;
    private String image;
    private String time;

    public post() {}

    public post( PostDTO postDTO )
    {
        this.index = postDTO.getIndex();
        this.name = postDTO.getName();
        this.topic = postDTO.getTopic();
        this.avatar = postDTO.getAvatar();
        this.text = postDTO.getText();
        this.image = postDTO.getImage();
        this.time = postDTO.getTime();
    }

    public Integer getIndex()
    {
        return index;
    }

    public void getIndex ( Integer index )
    {
        this.index = index;
    }

    public String getName()
    {
        return name;
    }

    public void setName( String name )
    {
        this.name = name;
    }

    public String getTopic()
    {
        return topic;
    }

    public void setTopic( String topic )
    {
        this.topic = topic;
    }

    public String getAvatar()
    {
        return avatar;
    }

    public void setAvatar( String avatar )
    {
        this.avatar = avatar;
    }

    public String getText()
    {
        return text;
    }

    public void setText( String text )
    {
        this.text = text;
    }

    public String getImage()
    {
        return image;
    }

    public void setImage( String image )
    {
        this.image = image;
    }

    public String getTime()
    {
        return time;
    }

    public void setTime( String time )
    {
        this.time = time;
    }

    @Override
    public String toString()
    {
        return "post{" + "index=" + index + ", name='" + name + '\'' + ", topic='" + topic + '\'' + ", avatar='"
                + avatar + '\'' + ",text='" + text + '\'' + ", image='" + image + '\'' + ", time='" + time + '}';
    }
}




