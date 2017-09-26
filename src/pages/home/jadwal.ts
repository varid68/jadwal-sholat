export interface Jadwal {
	Subuh?: string;
	Terbit?: string;
	Dzuhur?: string;
	Ashar?: string;
	Maghrib?: string;
	Isya?: string;
}

export interface Notif {
	subuh?: boolean;
	terbit?: boolean;
	dzuhur?: boolean;
	ashar?: boolean;
	maghrib?: boolean;
	isya?: boolean;	
}