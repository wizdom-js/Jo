package com.contentree.interna.user.entity;

import lombok.Getter;

@Getter
public enum Grade {
	BRONZE, SILVER, GOLD;

	public String toString() {
		return this.name();
	}
}
