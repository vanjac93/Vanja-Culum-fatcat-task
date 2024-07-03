import { useState } from 'react';

import PageGenerator from '@homework-task/features/PageGenerator';

import { dummyLayouts } from './util';

export default function PageGeneratorExample() {
    const [selectedLayout, setSelectedLayout] = useState(0);

    return (
        <section>
            <select
                className="mb-8 border-2 px-2 py-4"
                onChange={(e) => setSelectedLayout(+e.currentTarget.value)}
            >
                {dummyLayouts.map((_, indx) => (
                    <option key={indx} value={indx}>
                        {indx}
                    </option>
                ))}
            </select>
            <PageGenerator layout={dummyLayouts[selectedLayout]} />
        </section>
    );
}
