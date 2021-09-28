package org.generation.PetPals.controller.dto;


public class PostDTO {

    private Integer index;
    private String name;
    private String topic;
    private String avatar;
    private String text;
    private String image;
    private String time;

    //This set of constructors for database
    public PostDTO( Integer index, String name, String topic, String avatar, String text, String image, String time )
    {
        this.index = index;
        this.name = name;
        this.topic = topic;
        this.avatar = avatar;
        this.text = text;
        this.image = image;
        this.time = time;
    }

    //This set of constructors for display purpose
    public PostDTO( String name, String topic, String avatar, String text, String image, String time )
    {
        this.name = name;
        this.topic = topic;
        this.avatar = avatar;
        this.text = text;
        this.image = image;
        this.time = time;
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


}
