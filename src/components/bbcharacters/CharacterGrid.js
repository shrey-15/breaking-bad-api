import React, { useState } from 'react'
import ReactModal from 'react-modal'
import CharacterItem from './CharacterItem'
import CharacterInfo from './CharacterInfo'
import Spinner from '../ui/Spinner'


const CharacterGrid = ({ items, isLoading }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [info, setInfo] = useState({})


    return isLoading ? (
        <Spinner />
    ) : (
        <section className="cards">
            {items.map((item) => (
                <div key={item.char_id} onClick={() => { setModalIsOpen(true); setInfo(item) }}>
                    <CharacterItem item={item} >

                    </CharacterItem>
                </div>

            ))}
            <ReactModal isOpen={modalIsOpen} className="myModal" style={{
                overlay: {
                    backgroundColor: 'rgba(22,22,22, 0.5)'
                }
            }} >

                <span><button className="close btn" onClick={() => { setModalIsOpen(false) }}>x</button></span>
                <CharacterInfo item={info}>

                </CharacterInfo>
            </ReactModal>
        </section>

    )
}

export default CharacterGrid