import { useState } from "react"

const MapExp = () => {

    const fruits = ['Apple', 'Banana', 'orange', 'kiwi']
    const [addFruit, setAddFruit] = useState(['Apple', 'Banana', 'orange', 'kiwi'])
    const addMango = () => {
        let lastFruit = ([...addFruit])
        lastFruit.push("mango")
        // setAddFruit([...addFruit, 'mango'])
        setAddFruit(lastFruit)

        console.log("Added Mango")
    }

    const removeKiwi = () => {
        let lastFruit = ([...addFruit])
        lastFruit.pop()
        setAddFruit(lastFruit)
        // console.log("Removed KIWI")

    }

    const objHeader = [{ id: 'ID', role: 'ROLE', exp: 'EXP' }]

    const objUsers = [{ id: 1, role: 'Engineer', exp: '3yrs' }, { id: 2, role: 'Doctor', exp: '4yrs' }, { id: 3, role: 'Police', exp: '10yrs' }]

    const conditionalRender = [{ id: 1, car: 'maruthi', color: 'black' }, { id: 2, car: 'toyata', color: 'white' }, { id: 3, car: 'mahendra', color: 'blue' }, { id: 4, car: 'chervolate', color: 'yellow' }]
    const items = ['Apple', 'Banana', 'Orange', 'Mango'];

    return (
        <>
            {/*Map Example */}
            <section>
                <h5>Map Example</h5>
                <ul>
                    {/* {fruits.map((item, value) => (
                        <li key={value}>{item}</li>
                    )

                    )} */}
                    <ul>
                        {addFruit.map((newfruit, i) => {
                            return <li key={i}>{newfruit}</li>
                        }
                        )}
                    </ul>
                </ul>
            </section>


            {/*Push Example */}
            <section>
                <h5>Push Example</h5>

                <button onClick={addMango}>Add Mango (+)</button>
                <ul>
                    {addFruit.map((newfruit, i) => {
                        return <li key={i}>{newfruit}</li>
                    }
                    )}
                </ul>
            </section>
            {/*Pop Example */}

            <section>
                <h5>Pop Example</h5>

                <button onClick={removeKiwi}>Remove Kiwi (-)</button>
                <ul>
                    {addFruit.map((removefruit, i) => {
                        return <li key={i}>{removefruit}</li>
                    }
                    )}
                </ul>

            </section>
            {/*Object Users Example */}

            <section>
                <h5>Rendering Objects</h5>
                <ul>
                    {objUsers.map((data) => (
                        <li key={objUsers.id}>{data.role} - {data.exp}</li>
                    )

                    )}
                </ul>
            </section>

            <section>
                <h5>Table Rendering Objects</h5>

                <table border="2">
                    <thead>
                        {objHeader.map((tableheader) => (
                            <tr>

                                <th>{tableheader.id}</th>
                                <th>{tableheader.role}</th>
                                <th>{tableheader.exp}</th>

                            </tr>

                        )

                        )}
                    </thead>
                    <tbody>

                        {
                            objUsers.map((tabledata) => (
                                <tr>
                                    <td>{tabledata.id}</td>
                                    <td>{tabledata.role}</td>
                                    <td>{tabledata.exp}</td>

                                </tr>
                            )

                            )
                        }

                    </tbody>
                </table>
            </section>
            <section>
                <h5>Conitional Rendering</h5>
                <ul>
                    {
                        conditionalRender.map(
                            (fourWheeler) => (
                                fourWheeler.color !== 'black' &&
                                <li style={{ listStyle: 'none' }}>{fourWheeler.id} : {fourWheeler.car} - {fourWheeler.color}</li>
                            )
                        )
                    }
                </ul>

                <ul>
                    {items.map((item, index) =>
                        item !== 'Banana' && <li key={index}>{item}</li>
                    )}
                </ul>
            </section>

        </>
    )
}
export default MapExp