import React from 'react'

const CharacterInfo = ({ item }) => {
    return (
        <div>
            <h1>{item.name}</h1>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <img className="info-image" src={item.img} alt='' />
                </div>
                <div className="col-md-4">
                    <ul className="info">
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Occupation:</strong> {item.occupation}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Status:</strong> {item.status}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Seasons Appeared:</strong> {item.appearance}
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterInfo
