import React from 'react'
import {Header, Segment, Input, Icon} from 'semantic-ui-react'

const MessageHeader =({channalName,numUniqueUsers
    ,handleSearch,privateChannel,isStarredChannel, handleStarred})=>{

       
    return(
        <Segment clearing className="message_header">

            <Header fluid="true" floated="left" as="h2" style={{marginBottom:"0" }} >
                <span>
            {channalName}
           
           {!privateChannel && <Icon 
           onClick={handleStarred}
           name={ isStarredChannel ? "star" : "star outline" }
           color={ isStarredChannel ? "yellow" : "black"}
           />}
                </span>

                <Header.Subheader>{numUniqueUsers}</Header.Subheader>
            </Header>

            <Header floated="right" >
            <Input
            onChange={handleSearch}
            size="mini"
            placeholder="seach messages"
            icon="search"
            name="searchTerm"
            
            />
            </Header>

        </Segment>
    )
}

export default MessageHeader