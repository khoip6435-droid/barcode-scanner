export function normalizeText(value){return String(value??'').trim().toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,'')}
export function normalizeBarcode(value){if(value===null||value===undefined)return '';let s=String(value).trim();if(/^\d+\.0+$/.test(s))s=s.replace(/\.0+$/,'');return s.replace(/\s+/g,'')}
