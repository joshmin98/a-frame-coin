import React, { Component } from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Scene>
                <a-entity camera look-controls wasd-controls></a-entity>
                <Entity obj-model={{obj: './COIN.obj'}}
                        position={{x: 0, y: 0, z: -7}}
                        rotation={{x: 90, y: 10, z: 0}}
                        scale={{x: 0.5, y: 0.5, z: 0.5}}
                        material={{src: './COIN.png', metalness: '0.33', roughness: '0.22'}}>
                  <a-animation attribute="rotation"
                               dur="10000"
                               fill="forwards"
                               to="0 360 0"
                               repeat="indefinite"></a-animation>
                </Entity>

                <a-sky color="#eee"></a-sky>
              </Scene>
            </div>
        );
    }
}

export default App;
