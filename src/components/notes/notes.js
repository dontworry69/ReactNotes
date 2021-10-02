import React from 'react';
import { Card,Input,Button } from 'semantic-ui-react'

export function Notes() {
  return (
    <main style={{padding:'20px',display:'flex'}}>
      <div style={{overflow:'auto'}}>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header content='Jake Smith' />
            <Card.Meta content='Musicians' />
            <Card.Description content='Jake is a drummer living in New York.' />
          </Card.Content>
        </Card>
      </div>
      <div style={{flexGrow:'2',marginLeft:'20px'}}>
        <div style={{backgroundColor:'#ffff',padding:'20px',borderRadius:'8px'}}>
          <Input style={{width:'100%'}} placeholder='Title' />
          <textarea name='' id='' cols='30' rows='10' placeholder="Subtitle" style={{marginTop:'20px',width:'100%',padding:'15px',outline:'none',border:'1px solid rgba(34,36,38,.15)',borderRadius:'8px'}}></textarea>
          <div style={{marginTop:'20px'}}>
            <Button primary>Save</Button>
            <Button secondary>Delete</Button>
          </div>
        </div>
      </div>
    </main>
  )
}