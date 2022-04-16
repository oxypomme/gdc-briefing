/**
 * Prepare various attributes for XML parsing
 *
 * https://community.bistudio.com/wiki/createDiaryRecord
 * TODO: img (don't show image)
 * TODO: marker
 * TODO: log
 * TODO: gear
 * TODO: currentTask
 * TODO: font
 *
 * @param {object} attributes The attributes
 * @returns The object
 */
const parseAttributes = (attributes) => {
	const tags = {};
	// Parsing color
	if (attributes.color) {
		tags.font = {
			...(tags.font ?? {}),
			color: attributes?.color,
		};
	}
	// Parsing size
	if (attributes.size) {
		let pxSize;
		switch (attributes.size) {
			case "small":
				pxSize = 9.75;
				break;
			case "large":
				pxSize = 27.69;
				break;
			case "huge":
				pxSize = 32.5;
				break;
			default:
				pxSize = 13;
				break;
		}
		tags.font = {
			...(tags.font ?? {}),
			size: pxSize,
		};
	}
	return tags;
};

/**
 * Parse JS Object into a XML tag
 *
 * @param {string} name The name of the tag
 * @param {Record<string, string|number>} attributes The atttributes of the tag
 * @param {string|number} [content] The content of the tag
 * @returns The XML tag
 */
const renderXMLTag = (name, attributes, content) => {
	// Keeping the start of the tag (eg: <font) to put it at the end of the string
	const xmlName = "<" + name;
	let xmlStart = xmlName;

	for (const [key, value] of Object.entries(attributes)) {
		xmlStart += ` ${key}='${value}'`;
	}

	if (content) {
		return `${xmlStart}>${content}${xmlName}/>`;
	}
	return `${xmlStart} />`;
};

/**
 * Parse Quill Delta into a createDiaryRecord.
 *
 * @param {string} name The Diary name
 * @param {Delta} delta
 * @returns The formatted SQF
 */
export const toSQF = (name, delta) => {
	let sqf = `player createDiaryRecord ["Diary", ["${name}", "`;

	if (delta?.ops) {
		for (let i = 0; i < delta.ops.length; i++) {
			let { insert, attributes } = delta.ops[i];

			if (!attributes?.header) {
				insert = insert.replaceAll("\n", "\n<br/>");
			}

			if (attributes) {
				const tags = parseAttributes(attributes);

				for (const [key, attrs] of Object.entries(tags)) {
					insert = renderXMLTag(key, attrs, insert);
				}
			}
			sqf += insert;
		}
		// Removing last \n
		sqf = sqf.replace(/\n<br\/>$/, "");
	}
	return sqf + '"]];';
};
